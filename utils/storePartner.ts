type PartnerWithUsData = {
    name: string;
    mobile: string;
    email: string;
    // role: string;
    // pincode: number;
    location: string;
    dob: string;
    eduQual: string;
  };
  
  export function storePartnerToDB(data: PartnerWithUsData) {
    const apiEndpoint = "/api/partner";
    console.log(`DATA: ${JSON.stringify(data)}`);
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  