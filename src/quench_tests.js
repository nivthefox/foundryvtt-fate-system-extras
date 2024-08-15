export function tests(quench) {
    quench.registerBatch('fate-system-toolbox.basic-pass', (ctx) => {
        const {describe, it, assert} = ctx;

        describe('Basic Pass', () => {
            it('should pass', () => {
                assert.ok(true);
            });
        });
    });
}
