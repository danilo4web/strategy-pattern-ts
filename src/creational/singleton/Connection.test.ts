import Connection from "./Connection"

test("Should always connect in same instance", function() {
    const connection1 = Connection.getInstance();
    const connection2 = Connection.getInstance();

    expect(connection1.id).toBe(connection2.id);
})


