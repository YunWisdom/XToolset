import BaseCell from "./BaseCell";

class FinishCell extends BaseCell {
    apply(scope) {
        super.apply(scope);

        scope.setCurrentOutputValue(null);
        scope.finish();
        scope.incrementColl();

        return this;
    }

    static match(value) {
        return value === '#! FINISH';
    }

}

export default FinishCell