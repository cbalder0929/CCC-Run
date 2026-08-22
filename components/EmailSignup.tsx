"use client";

import { FormEvent, useState } from "react";
import { IconMail } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!optIn) {
      setError("Please check the box to agree to receive email updates.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, optIn }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border-2 border-cobalt bg-cobalt/10 p-6 text-center"
      >
        <p className="font-display text-xl text-cobalt-dark">You&apos;re on the list!</p>
        <p className="mt-1 text-sm text-ink/70">
          Watch your inbox for CCC Run Club updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-md text-left">
      <label htmlFor="email-input" className="mb-2 block font-display text-sm tracking-widest text-ink/70">
        EMAIL ADDRESS
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <IconMail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
          <input
            id="email-input"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            placeholder="student@colum.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "email-error" : undefined}
            className="w-full rounded-sm border-2 border-ink bg-paper py-3 pl-10 pr-3 font-body text-base text-ink placeholder:text-ink/35 focus:border-cobalt"
          />
        </div>
        <button type="submit" disabled={status === "loading"} className="btn-primary shrink-0">
          {status === "loading" ? "Signing up…" : "Get Updates"}
        </button>
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-ink/70">
        <input
          type="checkbox"
          checked={optIn}
          onChange={(e) => setOptIn(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded-sm border-2 border-ink text-cobalt focus:ring-cobalt"
        />
        <span>I agree to receive CCC Run Club email updates.</span>
      </label>

      {status === "error" && (
        <p id="email-error" role="alert" className="mt-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}
