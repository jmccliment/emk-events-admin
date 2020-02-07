import { firestore } from './firebase';
import { createBasicRepositoryFromFirestoreCollection as buildRepo } from './genericRepository';

export const repository = buildRepo(firestore.collection('events'));

