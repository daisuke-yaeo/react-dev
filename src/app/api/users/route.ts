import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 },
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email } = body
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    })

    return NextResponse.json(newUser)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 },
    )
  }
}
