import { pgTable, text, pgEnum } from 'drizzle-orm/pg-core';

export const serviceEnum = pgEnum('service', [
  'Web Development',
  'MVP Entwicklung',
  'Prozess Automatisierung',
  'Ich brauche alles',
]);

export const clients = pgTable('client', {
  // id: text('id')
  //   .primaryKey()
  //   .$defaultFn(() => crypto.randomUUID()),
  service: serviceEnum('service').notNull().default('Web Development'),
  budget: text('budget'),
  description: text('description'),
  deadline: text('deadline'),
  name: text('name'),
  contactLink: text('contactLink'),
  email: text('email').notNull(),
});
