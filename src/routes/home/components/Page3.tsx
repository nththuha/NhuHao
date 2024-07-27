import { useWindowResize } from "@/hooks/useWindowResize";
import { Center, Container, Flex, Text } from "@mantine/core";

const letter = `Hello em,

Nhân ngày 1.8 - Quốc tế bạn gái ??😀?? chị viết thư này cho em :))

Lần này đổi mới tý ha, chị sẽ làm cái web này thay vì thư tay, tại đợt này chị hông có rảnh như đợt trước để ngồi viết thư tay hihi.

Tụi mình quen nhau cũng hơn 2 tháng rồi này, cũng có những lúc vui vẻ, cũng có những lúc giận hờn quá trời. Nhưng mà tụi mình vẫn chọn cách ngồi nói chuyện lại với nhau để giải quyết vấn đề. Chị thực sự trân trọng và cám ơn những gì em đã làm cho chị đó, thật đấy. Khoảng thời gian này thật sự chị cũng áp lực lắm, công việc thì nhiều, làm hoài hông hết mà nộp CV quá trời chỗ luôn, chỉ có mấy chỗ gọi hỏi sơ sơ rồi thôi.

À mà dạo này lâu lắm mới gặp 1 lần luôn, chị thực sự nhớ em đấy nhưng mà hổng dám nói, sợ mất công em nghĩ nhiều rồi lại phải thu xếp để gặp chị nữa. Nên hy vọng khi nào em có thời gian rảnh thì thu xếp ưu tiên cho chị he :)) rồi chị mua kẹo cho :))`;

const Page3 = () => {
  const isMobile = useWindowResize();

  return (
    <Center
      h="100vh"
      style={{
        background:
          "linear-gradient(to top, rgb(223, 233, 243) 0%, white 100%)",
      }}
    >
      <Container>
        <Center>
          <div
            style={{
              backgroundImage: "url('/background-letter.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              padding: "10vw 5vw",
              whiteSpace: "pre-line",
              overflowWrap: "break-word",
              maxWidth: isMobile ? "100vw" : "80vw",
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            <Text fz={16} fw={500}>
              {letter}
            </Text>
            <Flex justify="end" mt="10">
              <Flex direction="column" align="center">
                <Text fz={16} fw={500}>
                  Yêu em
                </Text>
                <Text fz={16} fw={500}>
                  Thu Hà đáng iu siêu cấp vũ trụ
                </Text>
              </Flex>
            </Flex>
          </div>
        </Center>
      </Container>
    </Center>
  );
};

export default Page3;
