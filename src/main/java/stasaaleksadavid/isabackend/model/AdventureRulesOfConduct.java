package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "adventure_rules_of_conduct")
public class AdventureRulesOfConduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "adventure_id")
    private long adventureId;

    @Column(name = "rule_name")
    private String ruleName;

    @Column(name = "rule_description")
    private String ruleDescription;


    public AdventureRulesOfConduct(){}

    public AdventureRulesOfConduct(long adventureId, String ruleName, String ruleDescription) {
        this.adventureId = adventureId;
        this.ruleName = ruleName;
        this.ruleDescription = ruleDescription;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getAdventureId() {
        return adventureId;
    }

    public void setAdventureId(long adventureId) {
        this.adventureId = adventureId;
    }

    public String getRuleName() {
        return ruleName;
    }

    public void setRuleName(String ruleName) {
        this.ruleName = ruleName;
    }

    public String getRuleDescription() {
        return ruleDescription;
    }

    public void setRuleDescription(String ruleDescription) {
        this.ruleDescription = ruleDescription;
    }


}
