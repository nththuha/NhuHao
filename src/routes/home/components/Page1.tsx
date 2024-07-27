import TextCenter from "@/components/common/TextCenter";
import { Center, Title } from "@mantine/core";
import Layout from "./Layout";
import LoginForm from "./LoginForm";

type Page1Props = {
  goToNextPage: () => void;
};

const Page1 = ({ goToNextPage }: Page1Props) => {
  return (
    <Layout>
      <Center>
        <Title fz={42} fw={900}>
          NHƯ HẢO
        </Title>
      </Center>
      <TextCenter>Chọn đúng để tiếp tục 😌</TextCenter>
      <LoginForm goToNextPage={goToNextPage} />
    </Layout>
  );
};

export default Page1;
