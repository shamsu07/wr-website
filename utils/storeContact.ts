type ContactUsData = {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  details: string;
};

export function storeContactToDB(data: ContactUsData) {
  const apiEndpoint = "/api/contact";

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
