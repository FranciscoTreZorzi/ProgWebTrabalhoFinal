package br.edu.uricer.projeto.integrador.presentation;

import br.edu.uricer.projeto.integrador.algorithms.KnapsackAlgorithm;
import br.edu.uricer.projeto.integrador.domains.Item;
import br.edu.uricer.projeto.integrador.dto.KnapsackDto;
import br.edu.uricer.projeto.integrador.services.ItemService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api")
public class AlgorithmController {

    private final ItemService itemService;
    public AlgorithmController(ItemService itemService) {
        this.itemService = itemService;
    }
    @GetMapping("/default/{budget}")
    public ResponseEntity<Map> getResult(@PathVariable Integer budget) {

        try {
            KnapsackAlgorithm knapsackAlgorithm = new KnapsackAlgorithm();


            Map result = knapsackAlgorithm.knapsackDynamicProgramming(

                    itemService.getWeightOfItems(),
                    itemService.getValueOfItems(),
                    itemService.getItemList().size(),
                    budget,
                    itemService.getItemList()
            );

            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            log.error("Problema no Algoritmo Padrão de Knapsack: ", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
