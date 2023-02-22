'use client';

import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { register, signin} from "@/lib/api";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const registerContent = {
    linkUrl: '/signin',
    linkText: 'Already have an account?',
    header: 'Create a new Account',
    subheader: 'Just a few thigns to get started',
    butonText: 'Register'
}

const signinContent = {
    linkUrl: '/register',
    linkText: "Don't have an account?",
    header: 'Welcome Back',
    subheader: 'Enter yoru credentials to access your account',
    butonText: 'Sign in'
}

const initial = { email: "", password: "", firstName: "", lastName: "" };

export default function AuthForm({ mode }: { mode: "register" | "signin" }) {
    
}

