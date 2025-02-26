using TimeCapsuleX.Common.Core;

namespace TimeCapsuleX.TimeBased.Core.BusinessRules;

internal sealed class OnlyUnopenedCapsuleCanBeOpenedRule : IBusinessRule
{
    private readonly bool _isOpened;

    internal OnlyUnopenedCapsuleCanBeOpenedRule(bool isOpened)
    {
        _isOpened = isOpened;
    }

    public bool IsMet() => !_isOpened;

    public string Error => "The capsule can only be opened once";
}
