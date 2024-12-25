import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/pages/home",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
