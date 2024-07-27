import { isSameDate } from "@/utils/time";
import { Button, Card, Progress, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useState } from "react";

const DATE = new Date("2024-05-12");

type LoginProps = {
  date: Date;
};

const initialValues: LoginProps = {
  date: new Date(),
};

type LoginFormProps = {
  goToNextPage: () => void;
};

const LoginForm = ({ goToNextPage }: LoginFormProps) => {
  const [progress, setProgress] = useState(0);
  const form = useForm<LoginProps>({
    initialValues,
    validate: {
      date: (value) =>
        isSameDate(value, DATE) ? null : "Sai rồi bé ơi!",
    },
  });

  const runProgress = () => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);

    setTimeout(() => {
      goToNextPage();
    }, 5000);
  };

  const login = () => {
    runProgress();
  };

  return (
    <Card withBorder shadow="md" radius={10} mt="1rem">
      <Stack gap="xs" p=".5rem" pt={0}>
        <form onSubmit={form.onSubmit(login)}>
          <DateInput
            label="Ngày quen nhau ♥"
            {...form.getInputProps("date")}
          />

          {progress > 0 && (
            <Progress
              mt="xl"
              radius="xl"
              size="xl"
              value={progress}
              animated
              color="pink.3"
            />
          )}

          <Button type="submit" w="100%" mt="xl">
            OK
          </Button>
        </form>
      </Stack>
    </Card>
  );
};

export default LoginForm;
