const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be navigate to', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    await page.goto('/pokemon/bulbasaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})