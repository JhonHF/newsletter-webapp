import { NextResponse } from "next/server";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios, { isAxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 1000,
});