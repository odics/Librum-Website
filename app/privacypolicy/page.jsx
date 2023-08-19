"use client";
import {
  Heading,
  Text,
  ListItem,
  OrderedList,
  VStack,
  Link,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";

const PrivacyPolicy = (props) => {
  return (
    <Flex
      spacing={4}
      color="whitesmoke"
      align="flex-start"
      direction="column"
      px="8.5em"
      py="5em"
      mx="auto"
      maxW="1300px"
    >
      <Heading fontSize="2.5em">PRIVACY POLICY</Heading>
      <Text mb="3.2em">Last Updated: July 26, 2023</Text>
      <Heading fontSize="1.5em" textColor="white">
        Interpretation and Definitions
      </Heading>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Interpretation
      </Heading>
      <Text>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </Text>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Definitions
      </Heading>
      <Text>
        Account means a unique account created for You to access our Service or
        parts of our Service.
      </Text>
      <Text>
        {`Affiliate means an entity that controls, is controlled by or is under
        common control with a party, where "control" means ownership of 50% or
        more of the shares, equity interest or other securities entitled to vote
        for election of directors or other managing authority.`}
      </Text>
      <Text>
        Application refers to Librum, the software program provided by the
        Company.
      </Text>
      <Text>
        {`Company (referred to as either "the Company", "We", "Us" or "Our" in
        this Agreement) refers to Librum-Reader, Kirchenkamp 2, 50226.`}
      </Text>
      <Text>Country refers to: Nordrhein-Westfalen, Germany</Text>
      <Text>
        Device means any device that can access the Service such as a computer,
        a cellphone or a digital tablet.
      </Text>
      <Text>
        Personal Data is any information that relates to an identified or
        identifiable individual.
      </Text>
      <Text>Service refers to the Application.</Text>
      <Text>
        Service Provider means any natural or legal person who processes the
        data on behalf of the Company. It refers to third-party companies or
        individuals employed by the Company to facilitate the Service, to
        provide the Service on behalf of the Company, to perform services
        related to the Service or to assist the Company in analyzing how the
        Service is used.
      </Text>
      <Text mb="3.2em">
        {`Usage Data refers to data collected automatically, either generated by
        the use of the Service or from the Service infrastructure itself (for
        example, the duration of a page visit). Usage Data refers to data
        collected automatically, either generated by the use of the Service or
        from the Service infrastructure itself (for example, the duration of a
        page visit).`}
      </Text>
      <Heading fontSize="1.5em" textColor="white">
        Collecting and Using Your Personal Data
      </Heading>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Types of Data Collected
      </Heading>
      <Heading fontSize="1em" textColor="white">
        Personal Data
      </Heading>
      <Text>
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </Text>
      <UnorderedList styleType="lower-alpha">
        <ListItem ml="1em">Email address</ListItem>
        <ListItem ml="1em">First name and last name</ListItem>
        <ListItem ml="1em">Usage Data</ListItem>
        <ListItem ml="1em">
          Banking details in case of In-app purchase feature
        </ListItem>
        <ListItem ml="1em">
          All of your existing information on Social Media if you Sign-up
          through such platforms
        </ListItem>
      </UnorderedList>
      <Heading fontSize="1em" textColor="white">
        Usage Data
      </Heading>
      <Text>Usage Data is collected automatically when using the Service.</Text>
      <Text>
        {`Usage Data may include information such as Your Device's Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our Service that You visit, the time and date of Your visit,
        the time spent on those pages, unique device identifiers and other
        diagnostic data.`}
      </Text>
      <Text>
        When You access the Service by or through a mobile device, We may
        collect certain information automatically, including, but not limited
        to, the type of mobile device You use, Your mobile device unique ID, the
        IP address of Your mobile device, Your mobile operating system, the type
        of mobile Internet browser You use, unique device identifiers and other
        diagnostic data.
      </Text>
      <Text>
        We may also collect information that Your browser sends whenever You
        visit our Service or when You access the Service by or through a mobile
        device.
      </Text>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Use of Your Personal Data
      </Heading>
      <Text>The Company may use Personal Data for the following purposes:</Text>
      <UnorderedList styleType="lower-alpha">
        <ListItem ml="1em">
          To provide and maintain our Service, including to monitor the usage of
          our Service.
        </ListItem>
        <ListItem ml="1em">
          To manage Your Account: to manage Your registration as a user of the
          Service. The Personal Data You provide can give You access to
          different functionalities of the Service that are available to You as
          a registered user.
        </ListItem>
        <ListItem ml="1em">
          For the performance of a contract: the development, compliance and
          undertaking of the purchase contract for the products, items or
          services You have purchased or of any other contract with Us through
          the Service.
        </ListItem>
        <ListItem ml="1em">
          {`To contact You: To contact You by email, telephone calls, SMS, or
          other equivalent forms of electronic communication, such as a mobile
          application's push notifications regarding updates or informative
          communications related to the functionalities, products or contracted
          services, including the security updates, when necessary or reasonable
          for their implementation.`}
        </ListItem>
        <ListItem ml="1em">
          To provide You with news, special offers and general information about
          other goods, services, and events which we offer that are similar to
          those that you have already purchased or enquired about unless You
          have opted not to receive such information.
        </ListItem>
        <ListItem ml="1em">
          To manage Your requests: To attend and manage Your requests to Us.
        </ListItem>
        <ListItem ml="1em">
          For business transfers: We may use Your information to evaluate or
          conduct a merger, divestiture, restructuring, reorganization,
          dissolution, or other sale or transfer of some or all Our assets,
          whether as a going concern or as part of bankruptcy, liquidation, or
          similar proceeding, in which Personal Data held by Us about our
          Service users is among the assets transferred.
        </ListItem>
        <ListItem ml="1em">
          For keeping Reading Statistics of the users: We may gather statistics
          such as how much they spend reading books, the way the user reads
          books and similar. We use this data to analyze it and display it to
          the user in the app. You can always choose to opt-out for this service
          too.
        </ListItem>
        <ListItem ml="1em">
          For other purposes: We may use Your information for other purposes,
          such as data analysis, identifying usage trends, determining the
          effectiveness of our promotional campaigns and to evaluate and improve
          our Service, products, services, marketing, and your experience.
        </ListItem>
      </UnorderedList>
      <Text>
        We may share Your personal information in the following situations:
      </Text>
      <UnorderedList>
        <ListItem>
          With Service Providers: We may share Your personal information with
          Service Providers to monitor and analyze the use of our Service, to
          contact You. It also includes that SSL banking service for safe
          transactions and to protect your banking details.
        </ListItem>
        <ListItem>
          For business transfers: We may share or transfer Your personal
          information in connection with, or during negotiations of, any merger,
          sale of Company assets, financing, or acquisition of all or a portion
          of Our business to another company.
        </ListItem>
        <ListItem>
          With Affiliates: We may share Your information with Our affiliates, in
          which case we will require those affiliates to honor this Privacy
          Policy. Affiliates include Our parent company and any other
          subsidiaries, joint venture partners or other companies that We
          control or that are under common control with Us.
        </ListItem>
        <ListItem>
          With business partners: We may share Your information with Our
          business partners to offer You certain products, services or
          promotions.
        </ListItem>
        <ListItem>
          With other users: when You share personal information or otherwise
          interact in the public areas with other users, such information may be
          viewed by all users and may be publicly distributed outside.
        </ListItem>
        <ListItem>
          With Your consent: We may disclose Your personal information for any
          other purpose with Your consent.
        </ListItem>
      </UnorderedList>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Retention of Your Personal Data
      </Heading>
      <Text>
        The Company will retain Your Personal Data only for as long as is
        necessary for the purposes set out in this Privacy Policy. We will
        retain and use Your Personal Data to the extent necessary to comply with
        our legal obligations (for example, if we are required to retain your
        data to comply with applicable laws), resolve disputes, and enforce our
        legal agreements and policies.
      </Text>
      <Text>
        The Company will also retain Usage Data for internal analysis purposes.
        Usage Data is generally retained for a shorter period of time, except
        when this data is used to strengthen the security or to improve the
        functionality of Our Service, or We are legally obligated to retain this
        data for longer time Periods.
      </Text>
      <Heading
        fontSize="1.17em"
        ml="2.5em"
        mt="2em"
        mb=".5em"
        textColor="white"
      >
        Transfer of Your Personal Data
      </Heading>
      <Text>
        {` Your information, including Personal Data, is processed at the Company's
        operating offices and in any other places where the parties involved in
        the processing are located. It means that this information may be
        transferred to — and maintained on — computers located outside of Your
        state, province, country or other governmental jurisdiction where the
        data protection laws may differ than those from Your jurisdiction.`}
      </Text>
      <Text>
        Your consent to this Privacy Policy followed by Your submission of such
        information represents Your agreement to that transfer.
      </Text>
      <Text mb="3.2em">
        The Company will take all steps reasonably necessary to ensure that Your
        data is treated securely and in accordance with this Privacy Policy and
        no transfer of Your Personal Data will take place to an organization or
        a country unless there are adequate controls in place including the
        security of Your data and other personal information.
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Security of Your data
      </Heading>
      <Text>
        The security of Your Personal Data is important to Us, but remember that
        no method of transmission over the Internet, or method of electronic
        storage is 100% secure.
      </Text>
      <Text>
        We have put the necessary security measures in place to guard against
        accidental loss, unauthorised use or access, alteration, or disclosure
        of your data. Additionally, we only allow employees, agents,
        contractors, and other third parties who have a business need to know
        access to your data. They have a confidentiality obligation and will
        only act in accordance with our instructions while processing your
        personal data.
      </Text>
      <Text mb="3.2em">
        When we are legally obligated to do so, we will notify you and any
        relevant regulator of a breach and will have procedures in place to deal
        with any suspected personal data breach.
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Disclosure of your Data
      </Heading>
      <Text mb="3.2em">
        {`We use several third-party services from Microsoft Corporation, Google
        LLC, and AWS. We send the data necessary to these third-party services
        to improve the user experience. One example of this is Google’s
        reCAPTCHA 3, that we use to provide simple and straightforward actions
        on our website and the application, without the need for constant “I’m
        not a computer” puzzles.`}
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Delete Your Personal Data
      </Heading>
      <Text>
        You have the right to delete or request that We assist in deleting the
        Personal Data that We have collected about You.
      </Text>
      <Text>
        Our Service may give You the ability to delete certain information about
        You from within the Service.
      </Text>
      <Text>
        You may update, amend, or delete Your information at any time by signing
        in to Your Account, if you have one, and visiting the account settings
        section that allows you to manage Your personal information. You may
        also contact Us to request access to, correct, or delete any personal
        information that You have provided to Us.
      </Text>
      <Text mb="3.2em">
        Please note, however, that We may need to retain certain information
        when we have a legal obligation or lawful basis to do so.
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Business Transactions
      </Heading>
      <Text mb="3.2em">
        If the Company is involved in a merger, acquisition, or asset sale, Your
        Personal Data may be transferred. We will provide notice before Your
        Personal Data is transferred and becomes subject to a different Privacy
        Policy.
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Law enforcement
      </Heading>
      <Text mb="3.2em">
        Under certain circumstances, the Company may be required to disclose
        Your Personal Data if required to do so by law or in response to valid
        requests by public authorities (e.g. a court or a government agency).
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Other legal requirements
      </Heading>
      <Text>
        The Company may disclose Your Personal Data in the good faith belief
        that such action is necessary to:
      </Text>
      <UnorderedList styleType="lower-alpha" mb="3.2em">
        <ListItem ml="1em">Comply with a legal obligation</ListItem>
        <ListItem ml="1em">
          Protect and defend the rights or property of the Company
        </ListItem>
        <ListItem ml="1em">
          Prevent or investigate possible wrongdoing in connection with the
          Service
        </ListItem>
        <ListItem ml="1em">
          Protect the personal safety of Users of the Service or the public
        </ListItem>
        <ListItem ml="1em">Protect against legal liability</ListItem>
      </UnorderedList>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Opting Out of the App Service
      </Heading>
      <Text mb="3.2em">
        You have the option to opt out of several services that we provide, such
        as collectingusage data to display statistics, newsletters sent by
        email, and similar. If the website or application does not provide a way
        to opt out of optional services we provide, send us an email, and we
        will assist you.
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        {`Children's Privacy`}
      </Heading>
      <Text mb="3.2em">
        {`Our Service does not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from anyone under
        the age of 13. If You are a parent or guardian and You are aware that
        Your child has provided Us with Personal Data, please contact Us. If We
        become aware that We have collected Personal Data from anyone under the
        age of 13 without verification of parental consent, We take steps to
        remove that information from Our servers. If We need to rely on consent
        as a legal basis for processing Your information and Your country
        requires consent from a parent, We may require Your parent's consent
        before We collect and use that information.`}
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Links to Other Websites
      </Heading>
      <Text mb="3.2em">
        {`Our Service may contain links to other websites that are not operated by
        Us. If You click on a third-party link, You will be directed to that
        third party's site. We strongly advise You to review the Privacy Policy
        of every site You visit. We have no control over and assume no
        responsibility for the content, privacy policies, or practices of any
        third-party sites or services.`}
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Changes to this Privacy Policy
      </Heading>
      <Text mb="3.2em">
        {`We may update Our Privacy Policy sometimes. We will notify You of any
        changes by posting the new Privacy Policy on this page. We will let You
        know via email and/or a prominent notice on Our Service, prior to the
        change becoming effective and update the "Last updated" date at the top
        of this Privacy Policy. You are advised to review this Privacy Policy
        periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.`}
      </Text>
      <Heading fontSize="1.5em" textColor="white" mb=".5em">
        Contact Us
      </Heading>
      <Text>
        If you have any questions about this Privacy Policy, You can contact us:
      </Text>
      <Text>
        By email: <Link color="purple.400">help@librumreader.com</Link>.
      </Text>
    </Flex>
  );
};

export default PrivacyPolicy;
