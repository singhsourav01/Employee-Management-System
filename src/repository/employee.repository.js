import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createEmployee = async (data) => {
  console.log(data);
  return await prisma.employee.create({
    data,
  });
};

export const updateEmployee = async (id, data) => {
  return await prisma.employee.update({
    where: {
      id,
    }, 
    data
  });
};

export const getEmployee = async (id) => {
  return await prisma.employee.get({
    where: {
      id,
    }
  });
};

export const deleteEmployee = async (id) => {
  return await prisma.employee.delete({
    where: {
      id,
    }
  });
};


export const getEmployeeByName = async (name) => {
  return await prisma.employee.findFirst({
    where: {
      name:{
        contains:name
      }
    }
  });
};

export const getAllEmployees = async () => {
  return await prisma.employee.findMany();
};
