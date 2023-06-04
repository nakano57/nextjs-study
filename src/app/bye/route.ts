import { NextRequest, NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 
export async function GET(req: NextRequest, res: NextResponse) {
    const email = generateRandomString() + '@' + generateRandomString() + '.com';
    const user = await prisma.user.create({
        data: {
            name:  generateRandomString(),
            email: email,
        },
    })

    return NextResponse.json({
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
}

const generateRandomString = (charCount = 7): string => {
  const str = Math.random().toString(36).substring(2).slice(-charCount)
  return str.length < charCount ? str + 'a'.repeat(charCount - str.length) : str
}