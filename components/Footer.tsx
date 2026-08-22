export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-brush text-xl text-paper">
            CCC <span className="text-cobalt-light">Run</span> Club
          </p>
          <p className="mt-1 text-sm text-paper/60">Columbia College Chicago</p>
        </div>
        <p className="text-xs uppercase tracking-widest text-paper/40">
          Every Wednesday &middot; 12:00 PM &middot; Grant Park
        </p>
      </div>
    </footer>
  );
}
