export interface Country {
  name: string;
  code: string;
  paymentMethods: string[];
}

export const africanCountries: Country[] = [
  { name: 'Afrique du Sud', code: 'ZA', paymentMethods: ['MTN Money', 'Vodacom', 'Cell C', 'Capitec Pay'] },
  { name: 'Algérie', code: 'DZ', paymentMethods: ['CIB', 'BaridiMob', 'Mobilis Money'] },
  { name: 'Angola', code: 'AO', paymentMethods: ['Unitel Money', 'Movicel Money'] },
  { name: 'Bénin', code: 'BJ', paymentMethods: ['MTN Money', 'Moov Money'] },
  { name: 'Botswana', code: 'BW', paymentMethods: ['Orange Money', 'Mascom MyZaka'] },
  { name: 'Burkina Faso', code: 'BF', paymentMethods: ['Orange Money', 'Moov Money', 'Coris Money'] },
  { name: 'Burundi', code: 'BI', paymentMethods: ['Lumicash', 'Ecocash'] },
  { name: 'Cameroun', code: 'CM', paymentMethods: ['Orange Money', 'MTN Money', 'Express Union'] },
  { name: 'Cap-Vert', code: 'CV', paymentMethods: ['Unitel Money', 'T-Money'] },
  { name: 'Centrafrique', code: 'CF', paymentMethods: ['Orange Money', 'Moov Money'] },
  { name: 'Comores', code: 'KM', paymentMethods: ['Orange Money', 'Airtel Money'] },
  { name: 'Congo-Brazzaville', code: 'CG', paymentMethods: ['Airtel Money', 'MTN Money'] },
  { name: 'Congo-Kinshasa (RDC)', code: 'CD', paymentMethods: ['Orange Money', 'Airtel Money', 'Vodacom M-Pesa', 'Africell Money'] },
  { name: 'Côte d\'Ivoire', code: 'CI', paymentMethods: ['Orange Money', 'MTN Money', 'Moov Money', 'Wave'] },
  { name: 'Djibouti', code: 'DJ', paymentMethods: ['Evatis Money', 'Waafi'] },
  { name: 'Égypte', code: 'EG', paymentMethods: ['Orange Cash', 'Vodafone Cash', 'Etisalat Cash', 'Fawry'] },
  { name: 'Érythrée', code: 'ER', paymentMethods: ['Mobile Money Eritrea'] },
  { name: 'Eswatini (Swaziland)', code: 'SZ', paymentMethods: ['MTN Money', 'Swazi Mobile'] },
  { name: 'Éthiopie', code: 'ET', paymentMethods: ['M-Birr', 'HelloCash'] },
  { name: 'Gabon', code: 'GA', paymentMethods: ['Airtel Money', 'Moov Money'] },
  { name: 'Gambie', code: 'GM', paymentMethods: ['QMoney', 'Africell Money'] },
  { name: 'Ghana', code: 'GH', paymentMethods: ['MTN Money', 'Vodafone Cash', 'AirtelTigo Money'] },
  { name: 'Guinée', code: 'GN', paymentMethods: ['Orange Money', 'MTN Money', 'Moov Money'] },
  { name: 'Guinée-Bissau', code: 'GW', paymentMethods: ['Orange Money', 'MTN Money'] },
  { name: 'Guinée équatoriale', code: 'GQ', paymentMethods: ['Orange Money', 'Hits Money'] },
  { name: 'Kenya', code: 'KE', paymentMethods: ['M-Pesa', 'Airtel Money', 'T-Kash', 'Equitel'] },
  { name: 'Lesotho', code: 'LS', paymentMethods: ['Vodacom M-Pesa', 'EcoCash'] },
  { name: 'Liberia', code: 'LR', paymentMethods: ['Orange Money', 'MTN Money', 'Lonestar Cell MTN'] },
  { name: 'Libye', code: 'LY', paymentMethods: ['Tadawul', 'Sadad'] },
  { name: 'Madagascar', code: 'MG', paymentMethods: ['Orange Money', 'Airtel Money', 'MVola'] },
  { name: 'Malawi', code: 'MW', paymentMethods: ['Airtel Money', 'TNM Mpamba'] },
  { name: 'Mali', code: 'ML', paymentMethods: ['Orange Money', 'Moov Money', 'Malitel Money'] },
  { name: 'Maroc', code: 'MA', paymentMethods: ['Orange Money', 'Maroc Telecom Cash'] },
  { name: 'Maurice', code: 'MU', paymentMethods: ['My.t Money', 'Orange Money', 'EMTEL Money'] },
  { name: 'Mauritanie', code: 'MR', paymentMethods: ['Mauritel Money', 'Mattel Money'] },
  { name: 'Mozambique', code: 'MZ', paymentMethods: ['M-Pesa', 'Mkesh'] },
  { name: 'Namibie', code: 'NA', paymentMethods: ['MTN Money', 'TN Mobile'] },
  { name: 'Niger', code: 'NE', paymentMethods: ['Orange Money', 'Moov Money', 'Airtel Money'] },
  { name: 'Nigeria', code: 'NG', paymentMethods: ['Opay', 'PalmPay', 'Kuda', 'MTN MoMo', 'Airtel Money'] },
  { name: 'Ouganda', code: 'UG', paymentMethods: ['MTN Money', 'Airtel Money', 'M-Pesa'] },
  { name: 'Rwanda', code: 'RW', paymentMethods: ['MTN Money', 'Airtel Money', 'Tigo Cash'] },
  { name: 'Sao Tomé-et-Principe', code: 'ST', paymentMethods: ['Unitel Money'] },
  { name: 'Sénégal', code: 'SN', paymentMethods: ['Orange Money', 'Free Money', 'Wave', 'E-money'] },
  { name: 'Seychelles', code: 'SC', paymentMethods: ['Airtel Money', 'Cable & Wireless'] },
  { name: 'Sierra Leone', code: 'SL', paymentMethods: ['Orange Money', 'Africell Money'] },
  { name: 'Somalie', code: 'SO', paymentMethods: ['Zaad', 'EVC Plus', 'Sahal'] },
  { name: 'Soudan', code: 'SD', paymentMethods: ['MTN Money', 'Zain Cash'] },
  { name: 'Soudan du Sud', code: 'SS', paymentMethods: ['MTN Money', 'Zain Cash'] },
  { name: 'Tanzanie', code: 'TZ', paymentMethods: ['M-Pesa', 'Airtel Money', 'Tigo Pesa', 'Halo Pesa'] },
  { name: 'Tchad', code: 'TD', paymentMethods: ['Airtel Money', 'Moov Money', 'Tigo Cash'] },
  { name: 'Togo', code: 'TG', paymentMethods: ['Flooz (Moov)', 'T-Money (Togocom)'] },
  { name: 'Tunisie', code: 'TN', paymentMethods: ['Sobflous', 'd17', 'Orange Money'] },
  { name: 'Zambie', code: 'ZM', paymentMethods: ['MTN Money', 'Airtel Money', 'Zamtel Kwacha'] },
  { name: 'Zimbabwe', code: 'ZW', paymentMethods: ['EcoCash', 'OneMoney', 'Telecash'] }
];

export const findCountry = (countryName: string): Country | undefined => {
  return africanCountries.find(c => c.name === countryName);
};

export const getPaymentMethods = (countryName: string): string[] => {
  const country = findCountry(countryName);
  return country?.paymentMethods || [];
};