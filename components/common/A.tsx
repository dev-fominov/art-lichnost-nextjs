import Link from "next/link";

export function A({href, text, className}: any){
    return(
        <Link href={href}>
            <a className={className}>{text}</a>
        </Link>
    )
}