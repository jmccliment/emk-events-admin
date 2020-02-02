import { repository as studentRepo } from './students';
import { repository as beltRepo } from './belts';

const getAll = async () => {
  const students = await studentRepo.getAll();
  const belts = await beltRepo.getAll();
  const none = belts.find(({prescidence}) => prescidence === 0);
  return students.map(student => {
    const { beltId } = student;
    const { rank } = belts.find(({id}) => id === beltId) || none;
    return ({...student, rank})
  })
}

export const repository = {
  getAll
};