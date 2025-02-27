namespace TimeCapsuleX.Common.Core.UnitTests.Fakes;

public class FakeInvalidRule : IBusinessRule
{
    private readonly string _error;
    
    public FakeInvalidRule(string error) => _error = error;

    public bool IsMet() => false;
    public string Error => _error;
}
