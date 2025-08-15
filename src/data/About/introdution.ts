export const introduction: string[] = [
  "I am a fresh graduate in Informatics Engineering with passion for full-stack web development and mobile application development.", "Through various projects, I have developed skills in backend development, frontend development, and Android app development. I am a technology-driven learner who continuously seeks new knowledge to enhance my expertise.", " In my free time, I enjoy experimenting with new frameworks and building application prototypes. My passion lies in software engineering, data processing, and cloud-based application development."
];

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
