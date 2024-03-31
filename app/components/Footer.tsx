export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <p className=' p-4 mt-5 text-gray-500'>
      Copyright © {currentYear} by Catalina Avadani
    </p>
  );
}
