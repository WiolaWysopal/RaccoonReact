import React from "react";
import { Container, Grid, Text, Title, Box, Paper } from "@mantine/core";

export default function Portfolio() {
  return (
    <Box bg="gray.0" py="xl" px="sm" style={{ minHeight: "100vh" }}>
      <Container>
        <Title
          order={1}
          align="center"
          mb="xl"
          c="blue.7"
          style={{ fontFamily: "sans-serif" }}
        >
          Moje Portfolio
        </Title>

        <Grid gutter="lg">
          {/* Sekcja o mnie */}
          <Grid.Col span={12} hiddenFrom="sm">
            <Paper shadow="xs" p="md" radius="md" withBorder>
              <Title order={3} mb="xs" c="blue.6">
                O mnie
              </Title>
              <Text>
                Jestem programistą pasjonującym się tworzeniem responsywnych
                aplikacji webowych.
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4} visibleFrom="sm">
            <Paper shadow="xs" p="md" radius="md" withBorder>
              <Title order={3} mb="xs" c="blue.6">
                O mnie
              </Title>
              <Text>
                Jestem programistą pasjonującym się tworzeniem responsywnych
                aplikacji webowych.
              </Text>
            </Paper>
          </Grid.Col>

          {/* Sekcja projekty */}
          <Grid.Col span={12} hiddenFrom="sm">
            <Paper shadow="xs" p="md" radius="md" withBorder>
              <Title order={3} mb="xs" c="blue.6">
                Projekty
              </Title>
              <Text>
                - Portfolio
                <br />
                - Blog
                <br />- Sklep internetowy
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4} visibleFrom="sm">
            <Paper shadow="xs" p="md" radius="md" withBorder>
              <Title order={3} mb="xs" c="blue.6">
                Projekty
              </Title>
              <Text>
                - Portfolio
                <br />
                - Blog
                <br />- Sklep internetowy
              </Text>
            </Paper>
          </Grid.Col>

          {/* Sekcja kontakt */}
          <Grid.Col span={12} hiddenFrom="sm">
            <Paper shadow="xs" p="md" radius="md" withBorder>
              <Title order={3} mb="xs" c="blue.6">
                Kontakt
              </Title>
              <Text>email@example.com</Text>
              <Text>+48 123 456 789</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4} visibleFrom="sm">
            <Paper shadow="xs" p="md" radius="md" withBorder>
              <Title order={3} mb="xs" c="blue.6">
                Kontakt
              </Title>
              <Text>email@example.com</Text>
              <Text>+48 123 456 789</Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
