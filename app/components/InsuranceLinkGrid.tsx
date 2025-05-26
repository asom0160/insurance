import Image from "next/image";
import Link from "next/link";

export interface LinkItem {
    href: string;
    imgSrc: string;
}

interface Props {
    links: LinkItem[];
    title: string;
}

export default function InsuranceLinkGrid({ links, title }: Props) {
    return (
        <section className="my-4">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-200 p-2">
                {links.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center "
                    >
                        <Image
                            src={item.imgSrc}
                            alt={`${title} 링크 ${idx + 1}`}
                            width={400}
                            height={400}
                            className="  object-contain"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
