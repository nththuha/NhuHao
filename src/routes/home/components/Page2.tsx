import { useWindowResize } from "@/hooks/useWindowResize";
import { Button, Center, Flex, Image, Title } from "@mantine/core";
import Layout from "./Layout";

type Page2Props = {
  goToNextPage: () => void;
};

const Page2 = ({ goToNextPage }: Page2Props) => {
  const isMobile = useWindowResize();
  const yes = () => {
    goToNextPage();
  };

  return (
    <Layout>
      <Center>
        <Flex gap={20} direction="column" align="center">
          <Image
            radius="lg"
            h={isMobile ? "80vw" : "20vw"}
            w={isMobile ? "80vw" : "20vw"}
            src="love.gif"
          />
          <Title fz={30} fw={900}>
            Bé có yêu chị hông?
          </Title>

          <Flex gap={10}>
            <Button color="pink.3" onClick={yes}>
              Yêu
            </Button>
            <Button color="pink.4" onClick={yes}>
              Yêu nhiều lắm
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Layout>
  );
};

export default Page2;
