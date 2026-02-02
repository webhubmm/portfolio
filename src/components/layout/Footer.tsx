export default function Footer() {
  return (
    <footer className="bg-primary border-t border-[var(--color-border)] py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm text-content text-white">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
