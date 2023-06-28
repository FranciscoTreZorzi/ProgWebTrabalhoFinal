package br.edu.uricer.projeto.integrador.algorithms;

import br.edu.uricer.projeto.integrador.domains.Item;

import java.util.*;

public class KnapsackAlgorithm {
    public Map<Integer, String> knapsackDynamicProgramming(int[] weightOfAvailableItems, int[] valuesOfWeightOfAvailableItems, int availableItemsToPutInside, int targetValue, List<Item> itemList) {

        if (availableItemsToPutInside <= 0 || targetValue <= 0) {
            return new HashMap<>();
        }

        int[][] m = new int[availableItemsToPutInside + 1][targetValue + 1];
        boolean[][] selected = new boolean[availableItemsToPutInside + 1][targetValue + 1];

        for (int i = 1; i <= availableItemsToPutInside; i++) {
            for (int j = 1; j <= targetValue; j++) {
                int valueWithoutItemI = m[i - 1][j];
                if (valuesOfWeightOfAvailableItems[i - 1] > j) {
                    m[i][j] = valueWithoutItemI;
                } else {
                    int valueWithItemI = m[i - 1][j - valuesOfWeightOfAvailableItems[i - 1]] + weightOfAvailableItems[i - 1];
                    if (valueWithItemI > valueWithoutItemI) {
                        m[i][j] = valueWithItemI;
                        selected[i][j] = true;
                    } else {
                        m[i][j] = valueWithoutItemI;
                    }
                }
            }
        }

        Map<Integer, String> selectedItems = new HashMap<>();
        int j = targetValue;
        for (int i = availableItemsToPutInside; i >= 1 && j >= 1; i--) {
            if (selected[i][j]) {
                Item item = itemList.get(i - 1);
                selectedItems.put(item.getId(), item.getName());
                j -= valuesOfWeightOfAvailableItems[i - 1];
            }
        }

        return selectedItems;
    }
}
