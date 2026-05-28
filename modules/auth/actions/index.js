"use server";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { unstable_rethrow } from "next/navigation";

const isDatabaseConnectionError = (error) =>
    error?.code === "ECONNREFUSED" ||
    error?.message?.includes("ECONNREFUSED") ||
    error?.meta?.cause?.includes("ECONNREFUSED");

export const onBoardUser = async () => {
    try {
        const { userId } = await auth();

        if (!userId) {
            return { success: false, error: "No authenticated user found" };
        }

        const user = await currentUser();

        if (!user) {
            return { success: false, error: "No authenticated user found" };
        }

        const { id, firstName, lastName, imageUrl, emailAddresses } = user;
        const email = emailAddresses[0]?.emailAddress;

        if (!email) {
            return { success: false, error: "User must have an email address" };
        }

        const newUser = await db.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                firstName: firstName || null,
                lastName: lastName || null,
                imageUrl: imageUrl || null,
                email,

            },
            create: {
                clerkId: id,
                firstName: firstName || null,
                lastName: lastName || null,
                imageUrl: imageUrl || null,
                email,

            }
        });



        return {
            success: true,
            user: newUser,
            message: "User onboarded successfully"
        };

    } catch (error) {
        unstable_rethrow(error);

        if (isDatabaseConnectionError(error)) {
            return {
                success: false,
                error: "Database connection is unavailable"
            };
        }

        console.error("❌ Error onboarding user:", error);
        return {
            success: false,
            error: "Failed to onboard user"
        };
    }
};

export const currentUserRole = async () => {
    try {
        const { userId } = await auth();

        if (!userId) {
            return null;
        }

        const userRole = await db.user.findUnique({
            where: {
                clerkId: userId
            },
            select: {
                role: true
            }
        });

        return userRole?.role ?? null;
    } catch (error) {
        unstable_rethrow(error);

        if (isDatabaseConnectionError(error)) {
            return null;
        }

        console.error("❌ Error fetching user role:", error);
        return null;
    }
}
