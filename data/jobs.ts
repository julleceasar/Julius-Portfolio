export interface Job {
    name: String,
    cssClass: String,
    year: Number,
    title: String,
    description: String
}


const jobs = [
  {
    name: "Avis/Budget Group",
    cssClass: 'left',
    year: 2019,
    title: "Rental sales agent",
    description:
      "Worked as a rental sales agent at the Avis car rental office in Borås. The tasks consisted of renting cars to customers, administration and maintenance of vehicles etc..",
  },
  {
    name: "Rental cars (booking.com)",
    cssClass: 'right',
    year: 2017,
    title: "Customer service agent",
    description:
      "Worked with customer service at Rentalcars.com in Manchester towards Swedish and international customers. The work tasks involved, via phone and e-mail, helping customers with booking rental cars and selling additional products.",
  },
  {
    name: "Speed Group",
    cssClass: 'left',
    year: 2016,
    title: "Consultant",
    description:
      "Duties: During almost the entire period of employment, I was leased to the textile company Ludvig Svensson, where I worked with, among other things, yarn picking and yarn quality control.",
  },
  {
    name: "Manpower",
    cssClass: 'right',
    year: 2015,
    title: "Customer service representative",
    description:
      "Worked with customer service at Transcom for Comviq. Received calls via the phone to help private customers with e.g. technical and invoice questions regarding their mobile subscription.",
  },
  {
    name: "Citysälj AB",
    cssClass: 'left',
    year: 2014,
    title: "Telemarketer",
    description:
      "Duties: Sold newspaper subscriptions for some of Sweden's largest publishers to private individuals over the phone.",
  },
];

export default jobs;
