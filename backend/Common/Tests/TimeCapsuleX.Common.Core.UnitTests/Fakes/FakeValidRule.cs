namespace TimeCapsuleX.Common.Core.UnitTests.Fakes;

public class FakeValidRule : IBusinessRule
{
    public bool IsMet() => true;
    public string Error => string.Empty;
}
