import { Container, Grid, Stack, Box } from "@mantine/core";

function SimpleLayout() {
  return (
    <>
      <Box h={60} p="md" bg="blue.1" c="white">
        {" "}
        HEADER{" "}
      </Box>

      <Container mt="md" mb="md" style={{ height: "80vh" }}>
        <Grid>
          <Grid.Col span={3}>
            <Box bg="gray.2" p="md" style={{ height: "100%" }}>
              {" "}
              Side Bar
            </Box>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 1{" "}
              </Box>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 2{" "}
              </Box>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 3{" "}
              </Box>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 4{" "}
              </Box>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 5{" "}
              </Box>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 6{" "}
              </Box>
              <Box bg="gray.1" p="md">
                {" "}
                Main Content 7{" "}
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Box h={60} p="md" bg="blue.4" c="white">
        {" "}
        @ 2025 FOOTER{" "}
      </Box>
    </>
  );
}

export default SimpleLayout;
