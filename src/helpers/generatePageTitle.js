export default function generatePageTitle(data = {}) {
  try {
    data.title = data.title || "Downkount sport game schedule";
    data.metaDescription =
      data.metaDescription || "Professional sport games schedule";

    document.title = data.title.toString();
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", data.metaDescription.toString());
  } catch (error) {
    console.log(error);
  }
}
