import NextLink from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

interface Props {
    children?: ReactNode
    href: string
}
export default function Link({ children, href }: Props) {
    return (
        <NextLink href={href}>{children}</NextLink>
    );
}