'use server';

import { RegisterSchema } from '@/types/register-schema';
import { actionClient } from '@/lib/safe-action';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { clients } from '../schema';

export const RegisterAccount = actionClient
  .schema(RegisterSchema)
  .action(
    async ({
      parsedInput: {
        service,
        budget,
        description,
        deadline,
        name,
        contactLink,
        email,
      },
    }) => {
      // const existingClient = await db.query.clients.findFirst({
      //   where: eq(clients.email, email),
      // });

      if (!email) {
        return {
          error:
            'Bitte Email Adresse angeben, damit ich dich kontaktieren kann!',
        };
      }

      await db.insert(clients).values({
        service: service,
        budget: budget,
        description: description,
        deadline: deadline,
        name: name,
        contactLink: contactLink,
        email: email,
      });

      return { success: 'Deine Anfrage wurde Erfolgreich versendet!' };
    }
  );
