import { Text, useMantineColorScheme } from '@mantine/core';
import { NextSeo } from 'next-seo';

import ContactList from '@/components/Contact/ContactList';

const Contact = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <NextSeo title='Contact' />
      <main>
        <Text size={42} weight='bold'>
          Contact
        </Text>
        <ContactList isDark={isDark} />
      </main>
    </>
  );
};

export default Contact;
