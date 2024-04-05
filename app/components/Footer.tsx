export default function Footer() {
  // Bad naming for variables - not a clear and eloquent name
  const yyyy = new Date().getFullYear()
  // Example of a better name:
  // const currentYear = new Date().getFullYear();
  return (
    // The wrong order of the Tailwind CSS classnames - this will cause ESLint errors - should be mt-5 p-4 text-gray-500
    <p className=" p-4 mt-5 text-gray-500">
      Copyright © {yyyy} by Catalina Avadani
    </p>
  )
}
