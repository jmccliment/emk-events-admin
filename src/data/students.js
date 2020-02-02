import { firestore as db } from './firebase';
import { createBasicRepositoryFromFirestoreCollection as buildRepo } from './genericRepository';

const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const collection = db.collection('students');
export const repository = buildRepo(collection, student => ({ id: student?.id, ...student?.data(), age: getAge(student?.data().dateOfBirth)}));
