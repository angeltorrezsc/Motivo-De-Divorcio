export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Catálogo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}