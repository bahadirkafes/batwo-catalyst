
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} BATWO Catalyst. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}