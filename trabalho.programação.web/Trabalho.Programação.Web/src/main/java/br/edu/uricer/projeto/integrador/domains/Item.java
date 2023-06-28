package br.edu.uricer.projeto.integrador.domains;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    int id;
    int weight;
    int value;
    String name;

    public Item(int id, String name) {
        this.id = id;
        this.name = name;
    }

}
