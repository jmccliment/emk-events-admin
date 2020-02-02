export const getAllAsync = async (repository, setter) => {
  setter(await repository.getAll());
};

export const getByIdAsync = async (repository, id, setter) => {
  setter(await repository.getById(id));
}