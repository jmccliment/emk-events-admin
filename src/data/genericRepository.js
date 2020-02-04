import { firestore as db } from './firebase';
const convertToBasicData = doc => ({ id: doc?.id, ...doc?.data()});

export const createBasicRepositoryFromFirestoreCollection = (collection, map = convertToBasicData) => {
  const getAll = async () => {
    const snapshot = await collection.get();
    return snapshot.docs.map(map);
  }

  const getById = async (id, map = convertToBasicData) => {
    if(!id) return undefined;
    const doc = await collection.doc(id).get();
    return map(doc);
  }

  const update = async (id, updates) => {
    const docRef = collection.doc(id);
    await db.runTransaction(async transaction => {
      await transaction.update(docRef, updates);
    })
  }
  return { 
    getAll,
    getById,
    update
  }
}