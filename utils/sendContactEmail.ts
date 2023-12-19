type ContactUsData = {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  details: string;
};

export function sendContactEmail(data: ContactUsData) {
  const apiEndpoint = "/api/contactEmail";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
