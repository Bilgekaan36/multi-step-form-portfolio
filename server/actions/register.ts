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

      try {
        const res = await fetch(
          'https://hook.eu2.make.com/xxrjsedu1tiq6cv9jsred7lk5xgjkj33',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service,
              budget,
              description,
              deadline,
              name,
              contactLink,
              email,
            }),
          }
        );

        if (res.status === 200) {
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
      } catch (error) {
        console.error('Error sending data:', error);
        return {
          error:
            'Es ist ein Fehler aufgetreten, bitte versuche es später nochmal!',
        };
      }
    }
  );
