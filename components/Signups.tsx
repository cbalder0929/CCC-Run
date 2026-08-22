import EmailSignup from "./EmailSignup";
import SMSSignup from "./SMSSignup";

export default function Signups() {
  return (
    <section id="join" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="section-label">STAY IN THE LOOP</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Get email updates
          </h2>
          <p className="mt-4 font-body text-ink/70">
            Updates about upcoming runs, schedule changes, weather
            announcements, and club news &mdash; nothing else.
          </p>
          <div className="mt-8">
            <EmailSignup />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="section-label">GET TEXT REMINDERS</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Optional text reminders
          </h2>
          <p className="mt-4 font-body text-ink/70">
            Want a nudge before the run? Sign up for a quick text reminder.
            Totally optional &mdash; skip it if email is enough.
          </p>
          <div className="mt-8">
            <SMSSignup />
          </div>
        </div>
      </div>
    </section>
  );
}
