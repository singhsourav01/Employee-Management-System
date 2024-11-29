// import prisma from '../client';

import { PrismaClient } from '@prisma/client';  // ES Module (for Node.js using "type": "module" in package.json)
const prisma = new PrismaClient();


export const createAdmin = async (data) => {
  return await prisma.admin.create({
    data:{
      name: data.name,
      password: data.password
    }
  });
};

export const updateAdmin = async (uuid, data) => {
  return await prisma.admin.update({
    where: {
      uuid,
    }, 
    data
  });
};

export const getAdmin = async (uuid) => {
  return await prisma.admin.get({
    where: {
      uuid,
    }
  });
};

export const deleteAdmin = async (uuid) => {
  return await prisma.admin.delete({
    where: {
      uuid,
    }
  });
};


export const getAdminByName = async (name) => {
  return await prisma.admin.findFirst({
    where: {
      name:{
        contains:name
      }
    }
  });
};

