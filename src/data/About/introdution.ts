export const introduction: string[] = [
  "Hi everyone, my name is Muh. Nur Iksan. I'm a Mobile App Developer, Sotfware Development Enthusiast, IT Student at Universitas Halu Oleo",
  `I live in Kendari, Indonesia. I'm ${calculateAge(
    new Date('2003-02-19')
  )} years old. I always increase my curiosity by seeking answers from those curious.`,
];

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
