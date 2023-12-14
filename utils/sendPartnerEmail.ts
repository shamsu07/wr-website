type PartnerWithUsData = {
    name: string;
    mobile: string;
    email: string;
    location: string;
    dob: string;
    eduQual: string;
  };
  
  export function sendPartnerEmail(data: PartnerWithUsData) {
    const apiEndpoint = "/api/partnerEmail";
  
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }
  